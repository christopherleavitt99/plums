import PersonDetail from "@/components/PersonDetail";
import Person from "@/data/person.model";

function People() {
  const people: Person[] = [
    { name: "Chris", age: 25 },
    { name: "Jane", age: 30 },
    { name: "John", age: 35 },
  ];
  return people.map((person) => (
    <PersonDetail person={person} key={person.name} />
  ));
}

export default People;
