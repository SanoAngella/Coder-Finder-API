const studentData = [
  { name: "Alice", marks: 100 },
  { name: "Bob", marks: 76 },
  { name: "Charlie", marks: 90 },
  { name: "Kagabo", marks: 76 }

];

function fetchMarks(){
    return new Promise((resolve)=>{
        console.log("Fetching marks from the server");

        setTimeout(()=>{
            resolve(studentData);
        }, 2000)
    });
}

async function precessStudentMarks() {
    try {
const marks= await fetchMarks();

console.log("Data received! Processing...")
    }catch (error){
    console.error("Something went wrong:", error)
    }
}

processStudentMarks();