// Exercícios 1 e 2
class Student {
  matricula: string;
  nome: string;
  tests: number[];
  assessments: number[];

  constructor(matricula: string, nome: string, tests: number[], assessments: number[]) {
    this.matricula = matricula;
    this.nome = nome;
    this.tests = tests;
    this.assessments = assessments;
  }

  sumTests() {
    return this.tests.reduce((pV, cV) => pV + cV, 0)
  }

  averageTests() {
    const total = this.sumTests();
    return total / this.tests.length;
  }
};