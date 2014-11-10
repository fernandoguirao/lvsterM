Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});

Tracker.autorun( function() { 
  Session.set('pageTitle', 'Yet another value');
} );