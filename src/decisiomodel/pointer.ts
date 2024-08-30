import { DecisionModel } from "./types";

export class Pointer {
  decisionModel: DecisionModel;
  currentQuestionId: string;

  constructor(decisionModel: DecisionModel) {
    this.decisionModel = decisionModel;
    this.currentQuestionId = decisionModel.startQuestionId;
  }

  currentQuestion() {
    return this.decisionModel.questions[this.currentQuestionId];
  }

  answers() {
    return this.currentQuestion().answers;
  }

  chooseAnswer(answerId: string) {
    const answer = this.answers()?.find((a) => a.id === answerId);
    if (!answer) {
      throw new Error(`Answer with id ${answerId} not found`);
    }
    this.currentQuestionId = answer.nextQuestionId;
  }
}
