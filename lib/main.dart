import 'package:flutter/material.dart';
import 'package:portfolio/routes.dart';

void main() {
  runApp(MaterialApp(home: Portfolio()));
}

class Portfolio extends StatefulWidget {
  const Portfolio({super.key});

  @override
  State<Portfolio> createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  @override
  void initState() {
    super.initState();
    Flurorouter.setupRouter();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      onGenerateRoute: Flurorouter.router.generator,
      title: 'Rafael Yapchiongco | Portfolio Site',
      // home: Landing(),
    );
  }
}
