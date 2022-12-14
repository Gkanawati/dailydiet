export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      new: undefined;
      feedback: {
        status: string;
      };
      meal: {
        id: string;
        name: string;
        description: string;
        date: string;
        hour: string;
        status: string;
      };
      edit: {
        id: string;
        name: string;
        description: string;
        date: string;
        hour: string;
        status: string;
      };
    }
  }
}
