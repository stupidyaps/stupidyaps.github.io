import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomTextFormField extends StatefulWidget {
  final String hint;
  final int max;
  const CustomTextFormField({super.key, required this.hint, required this.max});
  @override
  State<CustomTextFormField> createState() => _CustomTextFormFieldState();
}

class _CustomTextFormFieldState extends State<CustomTextFormField> {
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        color: Color(0xff161616),
        child: TextFormField(
          maxLines: widget.max,
          scrollPadding: EdgeInsets.all(0),
          decoration: InputDecoration(
            focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(color: Colors.tealAccent),
            ),
            hintText: widget.hint,
            hintStyle: GoogleFonts.oxanium(
              color: Color(0xff6c6c6c),
              fontSize: 20.0,
              fontWeight: FontWeight.w500,
            ),
            prefix: Container(width: 30.0),
          ),
        ),
      ),
    );
  }
}

