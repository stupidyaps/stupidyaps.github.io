import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ProjectCard extends StatefulWidget {
  final String image;
  final String head;
  final String sub;
  const ProjectCard({
    super.key,
    required this.head,
    required this.image,
    required this.sub,
  });

  @override
  State<ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<ProjectCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 10.0),
      height: 351 + 10.0,
      //color: Colors.red,
      width: 370,
      child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(3.0),
                color: Colors.white70,
                image: DecorationImage(
                  image: NetworkImage(widget.image),
                  fit: BoxFit.cover,
                ),
              ),
              height: 231,
              width: 370,
            ),
            SizedBox(height: 15.0),
            Text(
              widget.head,
              maxLines: 1,
              style: GoogleFonts.oxanium(
                fontSize: 20.0,
                color: Colors.white,
                fontWeight: FontWeight.w600,
              ),
            ),
            SizedBox(height: 8.0),
            SizedBox(
              width: 370,
              child: Text(
                widget.sub,
                maxLines: 3,
                softWrap: true,
                style: GoogleFonts.oxanium(
                  height: 1.65,
                  fontSize: 14.0,
                  color: Colors.white70,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
