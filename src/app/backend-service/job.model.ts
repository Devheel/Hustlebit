export interface JobInterface {
  id: number;
  title: string;
  postedOn: string;
  bids: number;
  postedBy: string;
  category: string;
  ends: string;
  prize: number;
  isOpen: boolean;
  tags: Object;
}
