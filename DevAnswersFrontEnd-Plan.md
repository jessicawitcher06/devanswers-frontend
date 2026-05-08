## Plan: DevAnswers React 1 Frontend Build

Build all required frontend assignment parts first in strict rubric scope, using existing reusable components (QuestionCard, QuestionContent, VoteButtons) and adding complete unit coverage for QuestionList, Home, and QuestionDetail. After rubric-complete verification, include an optional, clearly separated data-consistency patch for questions.js so grading scope and engineering cleanup remain distinct.

Planned project deliverable filename: DevAnswersFrontEnd-Plan.md

**Steps**
1. Phase 0 - Baseline and Guardrails
1. Confirm dependencies install and test runner bootstraps successfully using existing scripts (no config changes unless failing).
2. Confirm [src/App.jsx](src/App.jsx) remains the manual page switch surface during development and keep current layout usage intact.
3. Lock scope to assignment targets only: Footer, Answer components, QuestionList, Home, QuestionDetail, and 3 unit test files.
4. Rubric checkpoint: coding practices baseline (naming, folder usage, indentation consistency) is preserved before feature work.

2. Phase 1 - Footer (5 pts)
1. Implement footer markup in [src/components/Footer/Footer.jsx](src/components/Footer/Footer.jsx) with a semantic footer and dynamic current year text for DevAnswers copyright line.
2. Add clean footer styling in [src/components/Footer/Footer.css](src/components/Footer/Footer.css) aligned with existing theme variables and layout spacing.
3. Validate footer is visible through [src/layouts/BaseLayout.jsx](src/layouts/BaseLayout.jsx), since this file already renders the Footer component.
4. Rubric checkpoint: Footer criterion satisfied with clean styling.

3. Phase 2 - Answer Components (20 pts total)
1. Implement controlled form behavior in [src/components/Answer/AnswerForm.jsx](src/components/Answer/AnswerForm.jsx): local textarea state, submit handler, empty validation alert, success alert, and reset on success.
2. Add form card, textarea, and submit button styles in [src/components/Answer/AnswerForm.css](src/components/Answer/AnswerForm.css) using project visual conventions.
3. Implement answer rendering in [src/components/Answer/AnswerList.jsx](src/components/Answer/AnswerList.jsx):
   display answer count heading,
   handle undefined/empty answers with empty-state message,
   render each answer card with text, author, formatted date,
   include VoteButtons handlers that alert upvote/downvote intent.
4. Add alternating card row styling (odd/even) and metadata presentation in [src/components/Answer/AnswerList.css](src/components/Answer/AnswerList.css).
5. Use existing [src/components/Shared/VoteButtons.jsx](src/components/Shared/VoteButtons.jsx) API without modification.
6. Rubric checkpoint: Answer Form and Answer List criteria satisfied.

4. Phase 3 - QuestionList and Home (15 pts total)
1. Implement conditional rendering in [src/components/Question/QuestionList.jsx](src/components/Question/QuestionList.jsx):
   loading true -> bootstrap spinner + loading message,
   no questions/falsy -> no questions found message,
   loaded list -> map to QuestionCard.
2. Reuse existing [src/components/Question/QuestionCard.jsx](src/components/Question/QuestionCard.jsx) props pattern directly to avoid shape regressions.
3. Implement [src/pages/Question/Home.jsx](src/pages/Question/Home.jsx):
   local states for questions and loading,
   useEffect on mount to load from [data/questions.js](data/questions.js) with simulated delay,
   heading, question count, ask question button with alert,
   pass questions/loading into QuestionList.
4. Add page-specific visual polish in [src/pages/Question/Home.css](src/pages/Question/Home.css) if needed for spacing/heading/button alignment.
5. Rubric checkpoint: Home and Question List criteria satisfied.

5. Phase 4 - Question Detail (10 pts)
1. Implement [src/pages/Question/QuestionDetail.jsx](src/pages/Question/QuestionDetail.jsx):
   id prop-driven lookup from [data/questions.js](data/questions.js),
   local question/loading state,
   simulated loading state with spinner,
   render QuestionContent, AnswerList, and AnswerForm once loaded.
2. Handle not-found case gracefully with a clear message if id does not match any question.
3. Add/adjust page styles in [src/pages/Question/QuestionDetail.css](src/pages/Question/QuestionDetail.css) for section spacing and readability.
4. Rubric checkpoint: Question Details criterion satisfied.

6. Phase 5 - Unit Tests (15 assertions total, 5 files criterion pts)
1. Implement 5 tests in [tests/unit/components/QuestionList.test.jsx](tests/unit/components/QuestionList.test.jsx) covering:
   loading state rendering,
   empty-state rendering,
   list rendering count,
   key question fields visible (title/description/vote context through QuestionCard),
   correct no-spinner in loaded state.
2. Implement 5 tests in [tests/unit/pages/Home.test.jsx](tests/unit/pages/Home.test.jsx) covering:
   All Questions heading,
   Ask Question button presence and click alert,
   loading spinner during mount load,
   question count after load,
   loaded question details visible through QuestionList.
3. Implement 5 tests in [tests/unit/pages/QuestionDetail.test.jsx](tests/unit/pages/QuestionDetail.test.jsx) covering:
   loading spinner initially,
   question content rendered after load,
   answers section/list rendering,
   answer form rendering,
   not-found or fallback rendering behavior for bad id.
4. Use async-safe RTL patterns (findBy/waitFor) to avoid race conditions from useEffect/simulated loading.
5. Run full suite with npm test and resolve any failing assertions.
6. Rubric checkpoint: Test criterion satisfied.

7. Phase 6 - Final QA and Submission Readiness
1. Manual run in dev server to verify Home and QuestionDetail display paths via [src/App.jsx](src/App.jsx) comment-toggle workflow.
2. Ensure all assignment alerts match exact required text strings.
3. Check naming/formatting consistency across all edited files.
4. Capture quick completion checklist mapped to each grading criterion.

8. Phase 7 - Optional Data Consistency Patch (Post-Rubric)
1. Only after all rubric items pass, optionally update [data/questions.js](data/questions.js) to correct mismatched answer questionId values under q1 answers.
2. Keep this patch isolated and documented as non-required assignment enhancement.
3. Re-run npm test and a quick manual QuestionDetail check to confirm no regressions.
4. Rubric checkpoint: no impact on required grading criteria; this is an extra quality pass.


**Parallelism and Dependencies**
1. Footer work can run in parallel with Answer component work.
2. QuestionList must complete before Home integration is finalized (Home depends on QuestionList behavior).
3. AnswerForm and AnswerList should complete before QuestionDetail final integration (QuestionDetail depends on both).
4. Test writing can start per feature as each phase completes, but full pass/fix is blocked until all implementation phases finish.

**Relevant files**
- [src/components/Footer/Footer.jsx](src/components/Footer/Footer.jsx) - implement semantic footer text with dynamic year.
- [src/components/Footer/Footer.css](src/components/Footer/Footer.css) - footer visual styling.
- [src/components/Answer/AnswerForm.jsx](src/components/Answer/AnswerForm.jsx) - controlled form, validation alerts, submit/reset behavior.
- [src/components/Answer/AnswerForm.css](src/components/Answer/AnswerForm.css) - form card/textarea/button styles.
- [src/components/Answer/AnswerList.jsx](src/components/Answer/AnswerList.jsx) - answer count, empty state, answer cards, vote button handlers.
- [src/components/Answer/AnswerList.css](src/components/Answer/AnswerList.css) - alternating card backgrounds and answer metadata styling.
- [src/components/Question/QuestionList.jsx](src/components/Question/QuestionList.jsx) - loading/empty/list conditional UI.
- [src/pages/Question/Home.jsx](src/pages/Question/Home.jsx) - data load useEffect, heading/count, ask question action.
- [src/pages/Question/Home.css](src/pages/Question/Home.css) - optional page-level spacing/styling support.
- [src/pages/Question/QuestionDetail.jsx](src/pages/Question/QuestionDetail.jsx) - id-based lookup, loading, composed detail view.
- [src/pages/Question/QuestionDetail.css](src/pages/Question/QuestionDetail.css) - detail page section styling.
- [tests/unit/components/QuestionList.test.jsx](tests/unit/components/QuestionList.test.jsx) - five component unit tests.
- [tests/unit/pages/Home.test.jsx](tests/unit/pages/Home.test.jsx) - five page unit tests for loading and rendered state.
- [tests/unit/pages/QuestionDetail.test.jsx](tests/unit/pages/QuestionDetail.test.jsx) - five detail-page unit tests.
- [data/questions.js](data/questions.js) - primary use as data source for Home/QuestionDetail lookup; optional post-rubric consistency patch target.
- [src/components/Question/QuestionCard.jsx](src/components/Question/QuestionCard.jsx) - reused card rendering contract.
- [src/components/Question/QuestionContent.jsx](src/components/Question/QuestionContent.jsx) - reused detail rendering contract.
- [src/components/Shared/VoteButtons.jsx](src/components/Shared/VoteButtons.jsx) - reused vote UI contract.

**Verification**
1. Run npm test from project root and confirm all 15 new tests pass.
2. Run npm run dev and verify:
   Home shows loading then full question list,
   ask question button triggers exact alert text,
   question count is accurate,
   QuestionDetail id q1 shows question content + answers + answer form,
   loading spinner appears before detail content.
3. Validate AnswerForm submit behavior manually:
   blank submit -> Answer cannot be empty!,
   non-blank submit -> Answer submitted!,
   textarea resets.
4. Validate AnswerList states manually:
   undefined/empty answers -> empty-state message,
   non-empty answers -> count and alternating styled cards with vote alerts.
5. Confirm footer appears consistently across pages with current year text.

**Decisions**
- Scope decision: execute rubric-required files first; treat [data/questions.js](data/questions.js) fix as optional post-rubric patch.
- Plan format decision: include grading-rubric checkpoints within each phase.
- Out of scope: routing redesign, backend/API integration, and persistent answer posting.

**Further Considerations**
1. Simulated loading delay duration should be set once and reused between Home and QuestionDetail for predictable tests (recommended).
2. Use stable text selectors in rendered UI to keep tests robust against minor markup changes (recommended).
3. If screenshot-level style parity is required by your instructor, add one visual review pass before final submission (optional).
