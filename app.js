function handleSubmit() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rollno = document.getElementById("roll_no").value;

    document.getElementById("me").innerHTML = "Name" +name;
    document.getElementById("hehe").innerHTML = "course" +""+ course;
    document.getElementById("na").innerHTML = "rollno"+rollno;
}
