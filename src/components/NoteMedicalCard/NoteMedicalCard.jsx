import React from "react";
import { Card, Modal } from "antd";
import { format } from "date-fns";
export const NoteMedicalCard = ({ note, setNoteVisible, isNoteVisible }) => {
  return (
    <Modal
      visible={isNoteVisible}
      onOk={() => setNoteVisible(false)}
      onCancel={() => setNoteVisible(false)}
      width={"fit-content"}
    >
      <Card className="card-patient">
        <p>
          Дата: {note.date && format(new Date(note.date), "dd.MM.yy hh.mm")}
        </p>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "10px",
            width: "fit-content",
          }}
        >
          {" "}
          Врач:
          <p> {note.doctorId?.doctorPersonalData.personData.lastName}</p>
          <p> {note.doctorId?.doctorPersonalData.personData.name}</p>
          <p> {note.doctorId?.doctorPersonalData.personData.patronymic}</p>
        </div>
        <p>Жалобы: {note.complaints}</p>
        <p>Локальный статус: {note.localStatus}</p>
        <p>Лечение: {note.treatment || "Не указано"}</p>
        <p>Рекомендации: {note.treatment || "Не указано"}</p>
      </Card>
    </Modal>
  );
};
