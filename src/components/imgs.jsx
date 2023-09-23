import { useState } from "react";
import "./users.css";
import { data } from "./data";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ user }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: user.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <img
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="user"
      src={user.imgsrc}
    >
    </img>
  );
};

const Users = () => {
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
  const  newUser = {
      id: Date.now().toString(),
      name: inputValue,
    };
    setInputValue("");
    setUsers((users) => [...users, newUser]);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
  };

  return (
    <div className="users">
      <div>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={users} strategy={verticalListSortingStrategy}>
            {users.map((user) => (  

              <SortableUser key={user.id} user={user} />
     
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
export default Users;