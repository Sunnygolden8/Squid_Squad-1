﻿#pragma strict

var name1: String = "Unknown";
var shooter: GameObject;
var runner: GameObject;
var customGuiStyle : GUIStyle;

function Start() {
}


function OnGUI() {
 //name1 = GUI.TextField(Rect(50,50,100,25), name1);
if(GUI.Button(Rect(Screen.width/2-350,Screen.height/2,350,300), "Runner", customGuiStyle)) {
 shooter.name = name1;
 Application.LoadLevel("Editor");
 }
 if(GUI.Button(Rect(Screen.width/2+100,Screen.height/2,350,300), "Shooter", customGuiStyle)) {
 runner.name = name1;
 Application.LoadLevel("Editor");
 }
}