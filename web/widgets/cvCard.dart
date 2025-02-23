import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Cvcard extends StatefulWidget {
  final String text1;
  final String text2;
  const Cvcard({super.key, required this.text2, required this.text1});
  @override
  State<Cvcard> createState() => _CvcardState();
}

class _CvcardState extends State<Cvcard> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(
          widget.text1,
          maxLines: 1,
          style: GoogleFonts.oxanium(
            fontSize: 16.0,
            color: Colors.white,
            fontWeight: FontWeight.w400,
          ),
        ),
        Text(
          widget.text2,
          maxLines: 1,
          style: GoogleFonts.oxanium(
            fontSize: 16.0,
            color: Colors.deepOrangeAccent,
            fontWeight: FontWeight.w400,
          ),
        ),
      ],
    );
  }
}
