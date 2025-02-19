export class ResumeResponseDTO {
  public resume_score: number;
  public section_scores: {
      About_Score: number;
      Alignment_Score: number;
      Brevity_Score: number;
      Education_Score: number;
      Grammar_Score: number;
      Keywords_Score: number;
      Projects_Score: number;
      Skills_Score: number;
  };
  public suggestions: string[];
}
