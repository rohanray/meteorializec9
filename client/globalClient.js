$(document).ready(function() {
    $('.button-collapse').sideNav({
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
});

Template.navTemp.events({
    "click .feedsAll": function(event) {
        Session.set("whichMainPanel", "feedsAll");
        console.log("whichMainPanel : "+Session.get("whichMainPanel"));
    },
    "click .contactsAll": function(event) {
        Session.set("whichMainPanel", "contactsAll");
        console.log("whichMainPanel : "+Session.get("whichMainPanel"));
    },
    "click .campaignsAll": function(event) {
        Session.set("whichMainPanel", "campaignsAll");
    },
    "click .sideNavEmailItem": function(event) {
        Session.set("whichMainPanel", "email");
    },
    "click .sideNavAnalyticsItem": function(event) {
        Session.set("whichMainPanel", "analytics");
    },
})

Template.mainContentWrapper.helpers({
    whichMainPanelHelper:function(){
        
        var whichMainPanelVar = Session.get("whichMainPanel");
        
        if(whichMainPanelVar === undefined ){
            whichMainPanelVar="feedsAll";
        }
        
        console.log("whichMainPanelHelper : "+whichMainPanelVar);
        
        return whichMainPanelVar;
    }
})

Template.navTemp.helpers({
    whichMainPanelHelper:function(){
        
        var whichMainPanelVar = Session.get("whichMainPanel");
        
        if(whichMainPanelVar === undefined ){
            whichMainPanelVar="feedsAll";
        }
        
        console.log("whichMainPanelHelper : "+whichMainPanelVar);
        
        return whichMainPanelVar;
    }
})