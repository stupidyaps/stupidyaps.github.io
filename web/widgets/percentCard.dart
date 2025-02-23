import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';

class PercentCard extends StatefulWidget {
  final double progress;
  final String text;
  const PercentCard({super.key, required this.progress, required this.text});

  @override
  State<PercentCard> createState() => _PercentCardState();
}

class _PercentCardState extends State<PercentCard> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width:
          MediaQuery.of(context).size.width > 950
              ? MediaQuery.of(context).size.width * 0.3 + 35
              : MediaQuery.of(context).size.width * 0.7,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(height: 45.0),
          Text(
            "   ${widget.text}",
            style: GoogleFonts.oxanium(
              fontSize: 16.0,
              color: Colors.white,
              fontWeight: FontWeight.w300,
            ),
          ),
          SizedBox(height: 10.0),
          LinearPercentIndicator(
            percent: widget.progress,
            lineHeight: 8.0,
            animation: true,
            animationDuration: 1000,
            barRadius: const Radius.circular(15),
            progressColor: Colors.deepOrangeAccent,
            backgroundColor: Color(0xff161616),
          ),
        ],
      ),
    );
  }
}
