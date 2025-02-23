import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/screens/about.dart';
import 'package:portfolio/screens/projects.dart';
import 'package:portfolio/screens/contact.dart';
import 'package:portfolio/screens/landing.dart';
import 'package:portfolio/screens/resume.dart';

class Flurorouter {
  static final FluroRouter router = FluroRouter();

  static final Handler _landingPageHandler = Handler(
    handlerFunc:
        (BuildContext? context, Map<String, dynamic> params) => Landing(),
  );

  static final Handler _aboutHandler = Handler(
    handlerFunc:
        (BuildContext? context, Map<String, dynamic> params) => About(),
  );

  static final Handler _projectsHandler = Handler(
    handlerFunc: (BuildContext? context, Map<String, dynamic> params) => Projects(),
  );

  static final Handler _contactHandler = Handler(
    handlerFunc:
        (BuildContext? context, Map<String, dynamic> params) => Contact(),
  );

  static final Handler _resumeHandler = Handler(
    handlerFunc:
        (BuildContext? context, Map<String, dynamic> params) => Resume(),
  );

  static void setupRouter() {
    router.define('/', handler: _landingPageHandler);
    router.define(
      '/About',
      handler: _aboutHandler,
      // transitionType: TransitionType.fadeIn,
    );
    router.define(
      '/Projects',
      handler: _projectsHandler,
      // transitionType: TransitionType.fadeIn,
    );
    router.define(
      '/Contact',
      handler: _contactHandler,
      // transitionType: TransitionType.fadeIn,
    );
    router.define(
      '/Resume',
      handler: _resumeHandler,
      // transitionType: TransitionType.fadeIn,
    );
  }
}
