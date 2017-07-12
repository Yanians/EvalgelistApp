(function(angular) {
    'use strict';

    var Globals = {
        lastUpdated: '1/2017',
        piazza: 'https://piazza.com/class/ixmajtkz8dt2vc'
    }
    
    angular
        .module('CoursePageApp', ['ngRoute', 'ngAnimate'])
        .config(config)
        .service('JsonDataService', JsonDataService)
        .service('AppValues', AppValues)
        
        .controller('MainCtrl', MainCtrl)
        .controller('AssignmentCtrl', AssignmentCtrl)
        .controller('ScheduleCtrl', ScheduleCtrl)
    ;
    
    function config($routeProvider, $locationProvider) {
        $routeProvider
        
        .when('/assignments', {
            templateUrl: 'html/assignments.html',
            controller: 'AssignmentCtrl',
            controllerAs: 'vm'
        })
        
        .when('/assignments/:assignmentId', {
            templateUrl: 'html/assignments.html',
            controller: 'AssignmentCtrl',
            controllerAs: 'vm'
        })
        
        .when('/schedule', {
            templateUrl: 'html/schedule.html',
            controller: 'ScheduleCtrl',
            controllerAs: 'vm'
        })
        
        .when('/resources', {
            templateUrl: 'html/resources.html',
        })
        
        .otherwise({
            templateUrl: 'html/main.html'
        })

    //$locationProvider.html5Mode(true);
    }
    
    AssignmentCtrl.$inject = ['$location', '$routeParams', '$timeout', '$anchorScroll', '$scope', 'JsonDataService', 'AppValues']
    function AssignmentCtrl($location, $routeParams, $timeout, $anchorScroll, $scope, JsonDataService, AppValues) {
        var vm = this;
        vm.name = "AssignmentCtrl";
        vm.params = $routeParams;
        vm.srv = JsonDataService;
        vm.setAssignment = setAssignment;
        vm.assignmentName = null;
        vm.assignmentDue = null;
        vm.assignmentId = null;
        vm.rubric = null;
        vm.url = null;
        vm.showRubric = true;
        vm.scrollTo = scrollTo
        vm.getRepoSYY = function() { return AppValues.syy }
        vm.hwid = null;

        vm.computeTotalPoints = function(items) {
            return items.map(function(item) { return item.pts })
                        .reduce(function(l,r) { return l + r })
        }

        vm.getTotalPoints = function() {
            if (vm.rubric)
                return vm.computeTotalPoints(
                    vm.rubric.map(function(sec) {                         
                        return (sec.section === "Demerits") ? 
                            [ {"item":"", "pts":0 } ] : sec.items 
                    })
                        .reduce(function(l,r) { return l.concat(r) })
                    )
            else
                return 0;
        }

        console.log('loaded up with ', vm.params)
        
        function setAssignment(id) {
            if (!id) {
                vm.assignmentName = 'General Info';
                vm.assignmentDue = undefined;
                vm.assignmentId = undefined;
                vm.url = undefined;
                vm.rubric = undefined;
                vm.showRubric = (vm.assignmentName != 'General Info')                
                return;
            }
            var a = vm.srv.getAssignment(id);
            if (a == undefined) {
                id = 'simple';
                a = vm.srv.getAssignment(id);
            }
            if (a != null) {
                vm.assignmentName = a.name;
                vm.assignmentDue = a.due;
                vm.assignmentId = id;
                vm.hwid = a.hwid
                vm.url = 'html/assignments/' + id + '.html';
                vm.rubric = a.rubric;
                //vm.showRubric = false;
                vm.showRubric = (vm.assignmentName != 'General Info')
            }
        }
        $timeout(function() {
            setAssignment($routeParams.assignmentId);
        }, 200);

        vm.getDueTime = function(id) {
            var duetime = undefined
            if (vm.srv && vm.srv.getAssignment(id)) {                   
                duetime = vm.srv.getAssignment(id).duetime
            }
            return duetime ? "before class at 2:30 PM" : "by 11:59 PM"
        }

        function scrollTo(anchor) {
            $anchorScroll.yOffset=80 // for the nav
            $anchorScroll(anchor ? anchor : 'rubric')
        }

    }
    
    MainCtrl.$inject = ['$route', '$routeParams', '$location', 'AppValues', 'JsonDataService']
    function MainCtrl($route, $routeParams, $location, AppValues, JsonDataService) {
        var vm = this;
        vm.$route = $route;
        vm.$location = $location;        
        vm.$routeParams = $routeParams;
        vm.lastUpdated = Globals.lastUpdated
        vm.piazza = Globals.piazza
        vm.syllabus531 = () => `COMP-531-Syllabus-${AppValues.year}${AppValues.term}.pdf`
        vm.syllabus431 = () => `COMP-431-Syllabus-${AppValues.year}${AppValues.term}.pdf`
        vm.getTerm = function() {
            return AppValues.long
        }
    }
    
    ScheduleCtrl.$inject = ['$route', '$routeParams', '$location', 'JsonDataService']
    function ScheduleCtrl($route, $routeParams, $location, JsonDataService) {
        var vm = this;
        vm.sessions = JsonDataService.sessions;
        vm.getDueDate = JsonDataService.getDueDate;
    }

    function AppValues() {
        return { syy: '?', long: '??', year: '????', term: '???' }
    }
    
    function JsonDataService($http, AppValues) {
        
        var srv = this;
        srv.firstDayOfClass = moment("2015-01-01")
        srv.sessions = []
        srv.assignments = {}
        
        srv.getDueDate = function(sessionDay, offset, extra = 0) {

            if (!offset) {                
                var session = srv.sessions.filter(function(s) { return s.day == sessionDay})            
                offset = session[0] ? session[0].offset : 0
            }            
            
            if (offset) {
                sessionDay += offset
            }

            var week = Math.floor((sessionDay - 1) / 2);
            var dow = (sessionDay - 1) - 2 * week;
            return moment(srv.firstDayOfClass)
                .add(week, 'weeks').add(dow * 2 + extra, 'days')
                .format("ddd MM/DD")
        }
        
        srv.getAssignment = function(id) {
            return srv.assignments[id];
        }

        $http.get('planning.json').success(function(data) {
            srv.firstDayOfClass = moment(data.class.firstDay)
            console.log('loading appvalues')
            AppValues.syy = data.class.term.substring(0,1) + data.class.year.substring(2)
            AppValues.long = data.class.term + ' ' + data.class.year
            AppValues.term = data.class.term
            AppValues.year = data.class.year
            srv.sessions.length = 0;
            angular.forEach(data.sessions, function(row) {
                srv.sessions.push(row);                
                var i = 1;
                data.assignments.forEach(function(assignment) {
                    if (assignment.due == row.day) {
                        row.assignment = assignment;
                        row.assignment.hwid = 
                            assignment.name.indexOf('COMP531') >= 0 ? '' : 
                                data.assignments.indexOf(assignment) + 1
                        srv.assignments[assignment.id] = assignment;
                        $http.get('data/rubric-'+assignment.id+'.json')
                             .success(function(data) {
                                row.assignment.rubric = data;
                            });
                    }
                })
            });
        });

    }
})(window.angular);
