export interface Topic {
  id?: string;
  title: string;
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  id?: string;
  title: string;
  checked?: boolean;
}
