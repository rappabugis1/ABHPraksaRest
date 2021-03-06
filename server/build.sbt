name := """RidvansRestaurant"""
organization := "atlantbh"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

lazy val myProject = (project in file("."))
  .enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.6"

libraryDependencies += guice
libraryDependencies += javaJdbc
libraryDependencies += evolutions

libraryDependencies += "org.postgresql" % "postgresql" % "42.2.5"

libraryDependencies += "com.auth0" % "java-jwt" % "3.4.1"
