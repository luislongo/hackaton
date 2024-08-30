export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Answer = {
  id: string;
  text: string;
  nextQuestionId: string;
};

export type Result = {
  id: string;
  text: string;
  answers: undefined;
};

export type DecisionModel = {
  startQuestionId: string;
  questions: { [id: string]: Question | Result };
};
