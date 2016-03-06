 
//use this with SavWav to record and save audio as a wav file 
//specify directory to save to: line 41 of SavWav

using UnityEngine;

using System.Collections;

 public class audioRec : MonoBehaviour {
 
     AudioClip myAudioClip; 
 
     void Start() {}
     void Update () {}
     
    void OnGUI()
    {
         if (GUI.Button(new Rect(10,10,60,50),"Record"))
     { 
         myAudioClip = Microphone.Start ( null, false, 10, 44100 );
     }
     if (GUI.Button(new Rect(10,70,60,50),"Save"))
     {
         SavWav.Save("savedClip", myAudioClip);
 
 //        audio.Play();
         }
    }
 }