import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class PlanCard extends StatefulWidget {
  final IconData icon;
  final String btext;
  const PlanCard({super.key, required this.btext, required this.icon});
  @override
  State<PlanCard> createState() => _PlanCardState();
}

class _PlanCardState extends State<PlanCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 50),
      height: 550,
      color: Color(0xff161616),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(widget.icon, color: Colors.deepOrangeAccent, size: 75.0),
          SizedBox(height: 40.0),
          Text(
            "Mobile App Design",
            style: GoogleFonts.oxanium(
              fontSize: 18.0,
              fontWeight: FontWeight.w300,
              color: Colors.white70,
            ),
          ),
          SizedBox(height: 15.0),
          Text(
            "Responsive Design",
            style: GoogleFonts.oxanium(
              fontSize: 18.0,
              fontWeight: FontWeight.w300,
              color: Colors.white70,
            ),
          ),
          SizedBox(height: 15.0),
          Text(
            "Database Development",
            style: GoogleFonts.oxanium(
              fontSize: 18.0,
              fontWeight: FontWeight.w300,
              color: Colors.white70,
            ),
          ),
          SizedBox(height: 15.0),
          Text(
            "Web Design",
            style: GoogleFonts.oxanium(
              fontSize: 18.0,
              fontWeight: FontWeight.w300,
              color: Colors.white70,
            ),
          ),
          SizedBox(height: 15.0),
          Text(
            "24/7 Support",
            style: GoogleFonts.oxanium(
              fontSize: 18.0,
              fontWeight: FontWeight.w300,
              color: Colors.white70,
            ),
          ),
          SizedBox(height: 30.0),
          Container(
            height: 40.0,
            width: 200,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50.0),
              color: Colors.deepOrangeAccent,
            ),
            child: Center(
              child: Text(
                widget.btext,
                style: GoogleFonts.oxanium(
                  fontSize: 16.0,
                  color: Colors.white,
                  fontWeight: FontWeight.w300,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
