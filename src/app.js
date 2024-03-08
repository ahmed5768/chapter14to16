// Task no 01
var literal = ['ahmed','ashfaq']

// Task no 02
var object = {
    stu:1,
    name:"ahmed",
    age:20,
}

// Task no 03
var arr = ["muhammad","ahmed"]

// Task no 04
var num = [1, 2, 3, 4, 5, 6, 7]

// Task no 05
var bool = [true, false]

// Task no 06
var mixed = ['ahmed', 20, true]

// Task no 07
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD']
document.write (qualification[0],  "</br>", qualification[1], "</br>", qualification[2], "</br>", qualification[3], "</br>", qualification[4], "</br>", qualification[5], "</br>", qualification[6], "</br>", qualification[7], "</br>")

// Task no 08
var studentName = ["Michael", "John", "Tony"]
var marks = [320, 230, 480]
var michaelPer = marks[0] * 100 / 500;
var johnper = marks[1] * 100 / 500;
var tonyper = marks[2] * 100 / 500;
document.write ("Score of ", studentName[0], " is ", marks[0], " Percentage: ", michaelPer, "% </br>" )
document.write ("Score of ", studentName[1], " is ", marks[1], " Percentage: ", johnper, "% </br>" )
document.write ("Score of ", studentName[2], " is ", marks[2], " Percentage: ", tonyper, "% </br>" )

// Task no 09

// point 01
var color = ['red', 'blue', 'green', 'black', 'yellow']
var addcolor = prompt("Wwhich color do you want to add of the begning")
color.unshift(addcolor)
document.write(color, "</br>");

// point 02
var addEndcolor = prompt("Wwhich color do you want to add of the end")
color.push(addEndcolor)
document.write(color);

// point 03
color.unshift("mahroon", "white");
document.write("<br> <b> Updated array after adding two more colors to the beginning </b> : </br>" + color);

// point 04
color.shift()
document.write("<br><b> Updated array (delete to the beginning ): </b> </br> " + color)

// point 05
color.pop();
document.write("<br><b> Updated array (delete to the end ): </b> </br> " + color);

// point 06
var addcolor1 = prompt("Wwhich color do you want to add color")
var addindex = +prompt("enter index")
if(addcolor1 && !isNaN(addindex)){
    color.splice(addindex, 0,addcolor1)
    console.log(color)
}else{
    alert('please enter correct details')
}

// point 07
var addcolor2 = prompt("Wwhich color do you want to delete color")
var addindex1 = +prompt("enter index")
if(!isNaN(addindex1) && !isNaN(addindex)){
    color.splice(addcolor2, addindex1)
    console.log(color)
}else{
    alert('please enter correct details')
}

// Task no 10
var scroe = [320, 230, 480, 120]
document.write ("Scores of Students ", scroe, "</br>")
scroe.sort()
document.write("Ordered Scores of Students ", scroe, "</br>")

// Task no 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
document.write("Cities list </br>", cities, "</br>");
var select = cities.slice(2,4)
document.write("Selected cities list </br> ", select, "</br>")

// Task no 12
var joined = [" This", " is" ,  " my" ,  " cat"];
document.write (joined[0], joined[1], joined[2], joined[3], "</br>")