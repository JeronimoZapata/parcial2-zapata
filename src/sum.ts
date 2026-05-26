export type CalculationResult = {
  operandA: number | null;
  operandB: number | null;
  result: number | null;
  isValid: boolean;
  errorMessage: string | null;
};

function parseNumberInput(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

export function sum(a: number, b: number): number {
  return a + b;
}

export function calculateSum(aRaw: string, bRaw: string): CalculationResult {
  const operandA = parseNumberInput(aRaw);
  const operandB = parseNumberInput(bRaw);

  if (operandA === null || operandB === null) {
    return {
      operandA,
      operandB,
      result: null,
      isValid: false,
      errorMessage: "Ingresa dos numeros validos.",
    };
  }

  return {
    operandA,
    operandB,
    result: sum(operandA, operandB),
    isValid: true,
    errorMessage: null,
  };
}
