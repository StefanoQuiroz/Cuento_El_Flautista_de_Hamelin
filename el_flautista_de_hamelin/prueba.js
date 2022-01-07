var pathString = "M744.5,266.5c40.73,40.94,95.97,85.72,153,36c39-34,35-93-13-155c-60.16-77.7-209-100-273-21c-69.34,85.59,41,201-32,282c-60.46,67.09-285.74,120.05-333,11c-52-120,104-142,47-289c-22.93-59.14-135-97-222-64c-68.11,25.83-130.29,91.19-144,168";
        var arrayPath = [];
        var newPath = Snap.path.toCubic(pathString);

        function setUpPoint(segment){
          for(var i = 0; i < segment.length; i+=2){
            var point = {};
            point.x = segment[i];
            point.y = segment[i+1];
            arrayPath.push(point);
          }
        }

        
        for(var i = 0; i < newPath.length; i++){
          var segment = newPath[i], pointt;
          segment.shift();
          pointt = setUpPoint(segment);
        }
        
        console.log("array:", arrayPath);