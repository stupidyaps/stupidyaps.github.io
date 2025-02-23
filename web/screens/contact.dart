import 'package:flutter/material.dart';
import 'package:portfolio/widgets/contactCard.dart';
import 'package:portfolio/widgets/customTextFormField.dart';
import 'package:web_smooth_scroll/web_smooth_scroll.dart';
import 'package:google_fonts/google_fonts.dart';

class Contact extends StatefulWidget {
  const Contact({super.key});

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
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
                  mainAxisAlignment: MainAxisAlignment.start,
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
                      "Feel free to contact me anytimes",
                      style: GoogleFonts.oxanium(
                        fontSize: 15.0,
                        color: Colors.white70,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      "Get in Touch",
                      style: GoogleFonts.tektur(
                        fontSize: 46.0,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 112.0),
                    mediaQuery.width > 1000
                        ? Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            MessageMe(),
                            SizedBox(width: 45.0),
                            ContactInfo(),
                          ],
                        )
                        : Column(
                          children: [
                            MessageMe(),
                            SizedBox(width: 45.0),
                            ContactInfo(),
                          ],
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

class MessageMe extends StatefulWidget {
  const MessageMe({super.key});

  @override
  State<MessageMe> createState() => _MessageMeState();
}

class _MessageMeState extends State<MessageMe> {
  @override
  Widget build(BuildContext context) {
    Size mediaQuery = MediaQuery.of(context).size;

    return SizedBox(
      height: 550,
      width:
          mediaQuery.width > 1000
              ? mediaQuery.width * 0.4
              : mediaQuery.width * 0.65,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Message me",
            style: GoogleFonts.tektur(
              fontSize: 25.0,
              color: Colors.white,
              fontWeight: FontWeight.w500,
            ),
          ),
          SizedBox(height: 10.0),
          Row(
            children: [
              CustomTextFormField(hint: "Name", max: 1),
              SizedBox(width: 25.0),
              CustomTextFormField(hint: "Email", max: 1),
            ],
          ),
          SizedBox(height: 25.0),
          SizedBox(
            height: 50,
            child: CustomTextFormField(hint: "Subject", max: 1),
          ),
          SizedBox(height: 25.0),
          SizedBox(
            height: 200,
            child: CustomTextFormField(hint: "Message", max: 25),
          ),
          SizedBox(height: 25.0),
          Align(
            alignment: Alignment.centerLeft,
            child: Container(
              height: 50,
              width: 200,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50.0),
                color: Colors.deepOrangeAccent,
              ),
              child: Center(
                child: Text(
                  "Send Message",
                  style: GoogleFonts.oxanium(
                    fontSize: 18.0,
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ContactInfo extends StatefulWidget {
  const ContactInfo({super.key});

  @override
  State<ContactInfo> createState() => _ContactInfoState();
}

class _ContactInfoState extends State<ContactInfo> {
  @override
  Widget build(BuildContext context) {
    Size mediaQuery = MediaQuery.of(context).size;

    return SizedBox(
      height: 550,
      width:
          mediaQuery.width > 1000
              ? mediaQuery.width * 0.3
              : mediaQuery.width * 0.65,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Contact Info",
            style: GoogleFonts.tektur(
              fontSize: 25.0,
              color: Colors.white,
              fontWeight: FontWeight.w500,
            ),
          ),
          SizedBox(height: 15.0),
          Text(
            "Always available for freelance work if the right project comes along, Feel free to contact me!",
            style: GoogleFonts.oxanium(
              fontSize: 15.0,
              color: Colors.white70,
              fontWeight: FontWeight.w400,
            ),
          ),
          SizedBox(height: 15.0),
          ContactCard(
            head: "Name",
            sub: "Emma Smith",
            icon: Icons.assignment_ind_outlined,
          ),
          ContactCard(
            head: "Location",
            sub: "4155 Mann Island, Liverpool, United Kingdom.",
            icon: Icons.location_on,
          ),
          ContactCard(
            head: "Call Me",
            sub: "+44 1632 967704",
            icon: Icons.phone_outlined,
          ),
          ContactCard(
            head: "Email Me",
            sub: "emma@example.com",
            icon: Icons.send_outlined,
          ),
        ],
      ),
    );
  }
}