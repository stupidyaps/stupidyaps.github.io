import 'package:flutter/material.dart';
import 'package:flutter_bootstrap/flutter_bootstrap.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/widgets/projectCard.dart';
import 'package:web_smooth_scroll/web_smooth_scroll.dart';

class Projects extends StatefulWidget {
  const Projects({super.key});

  @override
  State<Projects> createState() => _ProjectsState();
}

class _ProjectsState extends State<Projects> {
  bool condition = false;
  double height = 0;
  ScrollController controller = ScrollController();

  @override
  void initState() {
    super.initState();
    setState(() {
      condition = false;
      height = 1500;
      Future.delayed(Duration(milliseconds: 400), () {
        setState(() {
          height = 0;
        });
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    Size mediaQuery = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Color(0xff101010),
      body: Stack(
        children: [
          WebSmoothScroll(
            controller: controller,
            child: SingleChildScrollView(
              physics: NeverScrollableScrollPhysics(),
              controller: controller,
              child: Center(
                child: Column(
                  children: [
                    Align(
                      alignment: Alignment.centerRight,
                      child: Padding(
                        padding: const EdgeInsets.only(top: 25.0, right: 25.0),
                        child: GestureDetector(
                          onTap: () {
                            setState(() {
                              height = mediaQuery.height;
                            });
                            Future.delayed(Duration(milliseconds: 1000), () {
                              if (!context.mounted) return;
                              Navigator.pop(context);
                            });
                          },
                          child: Icon(
                            Icons.clear_rounded,
                            color: Colors.white,
                            size: 35.0,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(height: 43.0),
                    Text(
                      "Check out my projects",
                      style: GoogleFonts.oxanium(
                        fontSize: 15.0,
                        color: Colors.white70,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      "My Projects",
                      style: GoogleFonts.tektur(
                        fontSize: 46.0,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 112.0),
                    Center(
                      child: SizedBox(
                        width:
                            mediaQuery.width > 1300
                                ? mediaQuery.width * 0.65
                                : mediaQuery.width > 1200
                                ? mediaQuery.width * 0.75
                                : mediaQuery.width * 0.85,
                        child: BootstrapRow(
                          height: 361,
                          children: [
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                            BootstrapCol(
                              fit: FlexFit.tight,
                              sizes: 'col-md-6 col-lg-4 col-sm-12 col-xs-12',
                              child: SizedBox(
                                width: 370.0,
                                child: ProjectCard(
                                  image: "",
                                  head: "Take a tourof my office",
                                  sub:
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas",
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          SizedBox(
            height: mediaQuery.height,
            width: mediaQuery.width,
            child: Stack(
              children: [
                Positioned(
                  top: condition ? null : 0,
                  bottom: condition ? 0 : null,
                  child: AnimatedContainer(
                    duration: Duration(milliseconds: 400),
                    curve: Curves.easeInOut,
                    onEnd: () {
                      // setState(() {
                      //   condition ? condition = false : condition = true;
                      //   Future.delayed(Duration(milliseconds: 400), () {
                      //     height = 0;
                      //   });
                      // });
                    },
                    height: height,
                    width: mediaQuery.width,
                    color: Colors.black,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}