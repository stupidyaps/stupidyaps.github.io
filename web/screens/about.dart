import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bootstrap/flutter_bootstrap.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/widgets/cvCard.dart';
import 'package:portfolio/widgets/planCard.dart';
import 'package:portfolio/widgets/serviceCard.dart';
import 'package:web_smooth_scroll/web_smooth_scroll.dart';
import 'package:antdesign_icons/antdesign_icons.dart';

class About extends StatefulWidget {
  const About({super.key});

  @override
  State<About> createState() => _AboutState();
}

class _AboutState extends State<About> {
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
              controller: controller,
              physics: NeverScrollableScrollPhysics(),
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
                    SizedBox(height: 40),
                    Text(
                      "Get to know me",
                      style: GoogleFonts.oxanium(
                        fontSize: 15.0,
                        color: Colors.white70,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      "About Me",
                      style: GoogleFonts.tektur(
                        fontSize: 46.0,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 40.0),
                    BootstrapRow(
                      height: 600,
                      children: [
                        BootstrapCol(
                          sizes: 'col-md-12 col-lg-4 col-sm-12',
                          child:
                              mediaQuery.width < 992
                                  ? CircleAvatar(
                                    backgroundImage: NetworkImage(
                                      "https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/344214507_1031105961246130_7987151979003623938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHNnL0jq1lvZ0Ta-XRSG-lJHStP0HomZhkdK0_QeiZmGauF-TW_cVi2N41UmEFfZZ_r3S9hKW2nciBVa4fkdWZs&_nc_ohc=rBz1ie7o2MYQ7kNvgHfpZNQ&_nc_oc=Adi8IT7uCqJ3QRt3igbyFThfLXi4zcSg14rWmyNtOuJlGYBcgnp8TDbv3Bx27iinh0Q&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AJgMULs54e9-grJTjALT_tE&oh=00_AYAqANOvQiOqrI7kUQ3MNRKlMDeImjh4FX5G8g1l227_7A&oe=67C13BA1",
                                    ),
                                    radius:
                                        mediaQuery.width * 0.2,
                                  )
                                  : SizedBox(
                                    height: 500,
                                    child: Image(
                                      image: NetworkImage(
                                        "https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/344214507_1031105961246130_7987151979003623938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHNnL0jq1lvZ0Ta-XRSG-lJHStP0HomZhkdK0_QeiZmGauF-TW_cVi2N41UmEFfZZ_r3S9hKW2nciBVa4fkdWZs&_nc_ohc=rBz1ie7o2MYQ7kNvgHfpZNQ&_nc_oc=Adi8IT7uCqJ3QRt3igbyFThfLXi4zcSg14rWmyNtOuJlGYBcgnp8TDbv3Bx27iinh0Q&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AJgMULs54e9-grJTjALT_tE&oh=00_AYAqANOvQiOqrI7kUQ3MNRKlMDeImjh4FX5G8g1l227_7A&oe=67C13BA1",
                                      ),
                                      fit: BoxFit.cover,
                                    ),
                                  ),
                        ),
                        BootstrapCol(
                          sizes: 'col-md-12 col-lg-8 col-sm-12',
                          child: SizedBox(
                            height: 570.0,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                mediaQuery.width > 992
                                    ? Container()
                                    : SizedBox(height: 35.0),
                                Text(
                                  "Who am i?",
                                  style: GoogleFonts.oxanium(
                                    fontSize: 25.0,
                                    color: Colors.deepOrangeAccent,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                                SizedBox(height: 6.0),
                                AutoSizeText(
                                  "I'm Rafael Yapchiongco, an IT Support Specialist and a Web Developer",
                                  maxLines: 2,
                                  style: GoogleFonts.oxanium(
                                    fontSize: 33.0,
                                    color: Colors.white,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                SizedBox(height: 15.0),
                                AutoSizeText(
                                  "As a passionate and versatile IT professional, I possess a strong academic foundation and diverse technical expertise across programming languages, frameworks, and software tools. As a quick learner and collaborative team player, I am driven to apply my diverse skills to create innovative technological solutions.",
                                  maxLines: 5,
                                  textAlign: TextAlign.justify,
                                  style: GoogleFonts.oxanium(
                                    fontSize: 16.0,
                                    color: Colors.white70,
                                    fontWeight: FontWeight.w400,
                                  ),
                                ),
                                SizedBox(height: 25.0),
                                Container(
                                  width: double.maxFinite,
                                  height: 2.0,
                                  color: Colors.white70,
                                ),
                                Padding(
                                  padding: EdgeInsets.only(top: 10.0),
                                  child:
                                      mediaQuery.width > 800
                                          ? Row(
                                            children: [
                                              Cvcard(
                                                text1: "Name : ",
                                                text2: "Emma Smith",
                                              ),
                                              Spacer(),
                                              Cvcard(
                                                text1: "Mail : ",
                                                text2: "example@gmail.com",
                                              ),
                                            ],
                                          )
                                          : SizedBox(height: 100,
                                            child: Column(
                                              children: [
                                                Cvcard(
                                                  text1: "Name : ",
                                                  text2: "Emma Smith",
                                                ),
                                                Spacer(),
                                                Cvcard(
                                                  text1: "Mail : ",
                                                  text2: "example@gmail.com",
                                                ),
                                              ],
                                            ),
                                          ),
                                ),
                                Padding(
                                  padding: EdgeInsets.only(top: 10.0),
                                  child:
                                      mediaQuery.width > 800
                                          ? Row(
                                            children: [
                                              Cvcard(
                                                text1: "Age : ",
                                                text2: "21",
                                              ),
                                              Spacer(),
                                              Cvcard(
                                                text1: "From : ",
                                                text2: "LiverPark,UK",
                                              ),
                                            ],
                                          )
                                          : Column(
                                            children: [
                                              Cvcard(
                                                text1: "Age : ",
                                                text2: "21",
                                              ),
                                              Spacer(),
                                              Cvcard(
                                                text1: "From : ",
                                                text2: "LiverPark,UK",
                                              ),
                                            ],
                                          ),
                                ),
                                SizedBox(height: 35.0),
                                Row(
                                  children: [
                                    Container(
                                      height: 45,
                                      width: 200,
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(
                                          50.0,
                                        ),
                                        color: Colors.deepOrangeAccent,
                                      ),
                                      child: Center(
                                        child: Text(
                                          "Download CV",
                                          style: GoogleFonts.oxanium(
                                            fontSize: 16.0,
                                            color: Colors.white,
                                            fontWeight: FontWeight.w400,
                                          ),
                                        ),
                                      ),
                                    ),
                                    mediaQuery.width > 670
                                        ? Container(
                                          color: Colors.white70,
                                          width: 100.0,
                                          height: 1.0,
                                          margin: EdgeInsets.only(
                                            left: 7.0,
                                            right: 10.0,
                                          ),
                                        )
                                        : Container(),
                                    mediaQuery.width > 670
                                        ? Row(
                                          children: [
                                            Icon(
                                              AntIcons.twitterOutlined,
                                              color: Colors.white70,
                                              size: 18.0,
                                            ),
                                            SizedBox(width: 15.0),
                                            Icon(
                                              AntIcons.facebookOutlined,
                                              color: Colors.white70,
                                              size: 18.0,
                                            ),
                                            SizedBox(width: 15.0),
                                            Icon(
                                              AntIcons.linkedinOutlined,
                                              color: Colors.white70,
                                              size: 18.0,
                                            ),
                                            SizedBox(width: 15.0),
                                            Icon(
                                              AntIcons.githubOutlined,
                                              color: Colors.white70,
                                              size: 18.0,
                                            ),
                                            SizedBox(width: 15.0),
                                            Icon(
                                              AntIcons.instagramOutlined,
                                              color: Colors.white70,
                                              size: 18.0,
                                            ),
                                          ],
                                        )
                                        : Container(),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(height: 40),
                          Text(
                            "     Services i offer to my clients",
                            style: GoogleFonts.oxanium(
                              fontSize: 15.0,
                              color: Colors.white70,
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                          SizedBox(height: 8.0),
                          Text(
                            "  My Services",
                            style: GoogleFonts.tektur(
                              fontSize: 46.0,
                              fontWeight: FontWeight.w700,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: 25.0),
                        ],
                      ),
                    ),
                    BootstrapRow(
                      height: 300,
                      children: [
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.codeSandboxOutlined,
                            head: "Design Trends",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.bookOutlined,
                            head: "PSD Design",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.likeOutlined,
                            head: "Customer Support",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.creditCardOutlined,
                            head: "Web Development",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.antDesignOutlined,
                            head: "Fully Responsive",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                        BootstrapCol(
                          sizes: 'col-sm-12 col-md-12 col-lg-6',
                          child: ServiceCard(
                            icon: AntIcons.creditCardOutlined,
                            head: "Branding",
                            sub:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                          ),
                        ),
                      ],
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(height: 40),
                          Text(
                            "     Get started with my services",
                            style: GoogleFonts.oxanium(
                              fontSize: 15.0,
                              color: Colors.white70,
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                          SizedBox(height: 8.0),
                          Text(
                            "  Choose a Plan",
                            style: GoogleFonts.tektur(
                              fontSize: 46.0,
                              fontWeight: FontWeight.w700,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: 25.0),
                          Align(
                            alignment: Alignment.center,
                            child: SizedBox(
                              width:
                                  mediaQuery.width < 700
                                      ? mediaQuery.width * 0.6
                                      : mediaQuery.width * 0.9,
                              child: BootstrapRow(
                                height: 500,
                                children: [
                                  BootstrapCol(
                                    sizes: 'col-sm-12 col-md-12 col-lg-4',
                                    child: PlanCard(
                                      icon: AntIcons.smileOutlined,
                                      btext: "Get Started",
                                    ),
                                  ),
                                  BootstrapCol(
                                    sizes: 'col-sm-12 col-md-12 col-lg-4',
                                    child: PlanCard(
                                      icon: AntIcons.userOutlined,
                                      btext: "Get pro",
                                    ),
                                  ),
                                  BootstrapCol(
                                    sizes: 'col-sm-12 col-md-12 col-lg-4',
                                    child: PlanCard(
                                      icon: AntIcons.smileOutlined,
                                      btext: "Get Started",
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
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