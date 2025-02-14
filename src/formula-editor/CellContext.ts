// CellContext.ts
export interface CellValueProvider {
  getCellValue(address: string): number | undefined;
  setCellValue(address: string, value: number): void;
}

export class DefaultCellProvider implements CellValueProvider {
  private cells = new Map<string, number>();

  getCellValue(address: string): number | undefined {
    return this.cells.get(address.toUpperCase());
  }

  setCellValue(address: string, value: number): void {
    this.cells.set(address.toUpperCase(), value);
  }
}
