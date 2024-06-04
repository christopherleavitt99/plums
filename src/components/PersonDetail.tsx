import Person from "@/data/person.model";

function PersonDetail(props: { person: Person }) {
  return <h1>{props.person.name}</h1>;
}
export default PersonDetail;
