using UnityEngine;
using System.Collections;
using System.IO;
using System;

[System.Serializable]
public class AnimatorJson {

	[JSONArray("words", typeof(Words))]
	public Words[] movie;
//
	public class Words
	{
		[JSONItem("word", typeof(string))]
		public string title = null;
		[JSONItem("startTime", typeof(float))]
		public string status = null;
		[JSONItem("endTime", typeof(float))]
		public string originalstory = null;
		[JSONItem("faceAnimation", typeof([]))]
		public string originalwriter = null;
	}
}








	/*

		:[{"word":"hello","startTime":0.77,"endTime":1.37,"faceAnimation":[2,4,5,2]},
			{"word":"one","startTime":1.45,"endTime":1.88,"faceAnimation":[5,4,7]},
			{"word":"two","startTime":1.94,"endTime":2.31,"faceAnimation":[7,4]},
			{"word":"three","startTime":2.34,"endTime":2.84,"faceAnimation":[2,4,4]},
			{"word":"tests","startTime":2.96,"endTime":3.56,"faceAnimation":[7,3,7,7,7]}]
			*/