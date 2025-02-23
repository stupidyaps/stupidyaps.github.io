import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ContactCard extends StatefulWidget {
  final String head;
  final String sub;
  final IconData icon;
  const ContactCard({
    super.key,
    required this.head,
    required this.icon,
    required this.sub,
  });
  @override
  State<ContactCard> createState() => _ContactCardState();
}

class _ContactCardState extends State<ContactCard> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 75,
      width:
          MediaQuery.of(context).size.width > 1000
              ? MediaQuery.of(context).size.width * 0.3
              : MediaQuery.of(context).size.width * 0.65,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(widget.icon, size: 35, color: Colors.deepOrangeAccent),
          SizedBox(width: 20.0),
          Container(width: 3.0, color: Color(0xff161616)),
          SizedBox(width: 25.0),
          SizedBox(
            width:
                MediaQuery.of(context).size.width > 1000
                    ? MediaQuery.of(context).size.width * 0.2
                    : MediaQuery.of(context).size.width * 0.5 - 8,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  widget.head,
                  style: GoogleFonts.oxanium(
                    fontSize: 18.0,
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                Text(
                  widget.sub,
                  style: GoogleFonts.oxanium(
                    fontSize: 13.0,
                    color: Colors.white70,
                    fontWeight: FontWeight.w400,
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
