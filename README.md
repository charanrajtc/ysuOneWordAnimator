# ysuOneWordAnimator
One word animator using animate.css


# Demo

checkout the video `ysuOneWordAnimator.mp4` inside the repo 

# usage add 
1. add [animate.css](https://github.com/daneden/animate.css) to you html 

```
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>

```


2. add [ysuOneWordAnimator.js](https://github.com/charanrajtc/ysuOneWordAnimator) to you html 
*Note* :  depends Jquery 

```
<script type="text/javascript" src="ysuOneWordAnimator.js"></script>

```


3. init the plugin using jquery method 

```
  $(document).ready(function() {
      jQuery('#oneWordIdentifier').ysu_animateOneWordText('idHomepage', {
          animateTypeIn: "fadeInDown2",
          animateTypeOut: "fadeOutDown2",
          animateDurationIn: "duration1",
          animateDurationOut: "duration1",
          delayInOut: 2000,
          animateWords: ['ENGAGEMENT','COLLABORATION','IMPROVEMENT','DEMONSTRATION','LEADERSHIP','COMMUNICATION','KNOWLEDGE','PRESENTATION','SKILL','DEBATE','FEEDBACK','REVIEW','COACHING','FACE-TO-FACE','CRITICAL THINKING','OUTCOMES','MASTERY','GROUP WORK','CONNECTIONS','SELF-CRITIQUE'
          ]
      });
  });

```