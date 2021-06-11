export class AddTask {
  static readonly type = '[TASK] Add';

  constructor(public payload: string) {}
}

export class RemoveTask {
  static readonly type = '[TASK] Remove';

  constructor(public payload: number) {}
}

export class CompleteTask {
  static readonly type = '[TASK] Complete';

  constructor(public payload: number) {}
}

export class SortTasksByCompletedAt {
  static readonly type = '[TASK] Sort by Completed at';

  constructor(public payload: 'asc' | 'desc') {
  }
}

export class SortTasksByCreatedAt {
  static readonly type = '[TASK] Sort by Created at';

  constructor(public payload: 'asc' | 'desc') {
  }
}
