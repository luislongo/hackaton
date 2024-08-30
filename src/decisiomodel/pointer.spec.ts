// sum.test.js
import { expect, test, describe } from "vitest";
import { DecisionModel } from "./types";
import { Pointer } from "./pointer";

const mockDecisionModel: DecisionModel = {
  startQuestionId: "1",
  questions: {
    "1": {
      id: "1",
      text: "First question",
      answers: [
        {
          id: "1",
          text: "First answer",
          nextQuestionId: "2",
        },
        {
          id: "2",
          text: "Second answer",
          nextQuestionId: "3",
        },
      ],
    },
    "2": {
      id: "2",
      text: "Second question",
      answers: [
        {
          id: "2",
          text: "Second answer",
          nextQuestionId: "3",
        },
        {
          id: "3",
          text: "Third answer",
          nextQuestionId: "3",
        },
      ],
    },
    "3": {
      id: "3",
      text: "Third question",
      answers: undefined,
    },
  },
};

describe("Pointer", () => {
  test("A questão corrente deve ser igual a startQuestionId quando for construído", () => {
    const pointer = new Pointer(mockDecisionModel);
    const currentQuestion = pointer.currentQuestion();

    expect(currentQuestion.id).toBe("1");
  });

  test("Deve retornar as respostas da questão corrente", () => {
    const pointer = new Pointer(mockDecisionModel);
    const answers = pointer.answers();

    expect(answers).toEqual([
      {
        id: "1",
        text: "First answer",
        nextQuestionId: "2",
      },
      {
        id: "2",
        text: "Second answer",
        nextQuestionId: "3",
      },
    ]);

    // expect(answers).toHaveLength(2);
    // expect(answers?.[0].id).toBe("1");
  });

  test("Deve escolher uma resposta e mudar a questão corrente", () => {
    const pointer = new Pointer(mockDecisionModel);
    pointer.chooseAnswer("1");

    const currentQuestion = pointer.currentQuestion();
    expect(currentQuestion.id).toBe("2");
  });
});
