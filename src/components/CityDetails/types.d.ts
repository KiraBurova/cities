export type ChartData = {
  labels: Array<string>;
  datasets: Array<{
    data: Array<number>;
    backgroundColor: Array<string>;
    borderColor: string;
    borderWidth: number;
  }>;
};
