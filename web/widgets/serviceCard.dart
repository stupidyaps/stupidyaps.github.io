import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ServiceCard extends StatefulWidget {
  final IconData icon;
  final String head;
  final String sub;

  const ServiceCard({
    super.key,
    required this.head,
    required this.icon,
    required this.sub,
  });
  @override
  State<ServiceCard> createState() => _ServiceCardState();
}

class _ServiceCardState extends State<ServiceCard> {
  bool hover = false;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (value) {
        setState(() {
          hover = true;
          // print("true");
        });
      },
      onExit: (value) {
        setState(() {
          hover = false;
          // print("false");
        });
      },
      child: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              boxShadow: [
                BoxShadow(
                  color: Colors.black45,
                  offset: Offset(-1, 1),
                  blurRadius: 5.0,
                  spreadRadius: 0.5,
                ),
              ],
              color: Color(0xff161616),
            ),
            margin: EdgeInsets.only(bottom: 50.0),
            height: 230,
            child: Column(
              children: [
                Padding(
                  padding: EdgeInsets.only(
                    left: 35.0,
                    right: 35,
                    bottom: 30,
                    top: 20,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(widget.icon, color: Colors.white, size: 50),
                      SizedBox(height: 15.0),
                      Text(
                        widget.head,
                        style: GoogleFonts.tektur(
                          fontSize: 21.0,
                          color: Colors.white,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      SizedBox(height: 8.0),
                      Text(
                        widget.sub,
                        style: GoogleFonts.oxanium(
                          fontSize: 16.0,
                          fontWeight: FontWeight.w300,
                          color: Colors.white70,
                        ),
                      ),
                    ],
                  ),
                ),
                Spacer(),
                AnimatedContainer(
                  duration: Duration(milliseconds: 170),
                  curve: Curves.easeInOut,
                  height: 2.0,
                  color: !hover ? Color(0xff161616) : Colors.deepOrangeAccent,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
