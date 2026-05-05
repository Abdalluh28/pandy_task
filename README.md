# TalentFlow – Recruitment Frontend Assessment

TalentFlow is a recruitment marketplace interface that allows recruiters to browse, filter, and evaluate candidates efficiently.

---

## 🚀 Live Demo

https://pandy-task-chi.vercel.app/

---

## ⚙️ Setup Instructions

```bash
npm install
npm run dev
```

---

## 📌 Features

* Candidate dashboard at `/`
* Candidate profile page at `/candidate/:id`
* Search by name, headline, and skills
* Filters: location, experience, availability, status
* Sorting: most recent, most experienced, best match
* UI states:

  * Loading (skeletons)
  * Empty results
  * Error with retry
* Candidate actions:

  * Shortlist
  * Reject
* Dark mode with persistence
* Responsive design (mobile + desktop)

---

## 🧠 Technical Focus Areas

This project intentionally focuses on:

1. **URL-driven state**

   * Search, filters, and sorting are synced with query parameters

2. **Data fetching & caching**

   * Implemented using React Query for caching and refetching

3. **Reusable component system**

   * Modular UI components (cards, badges, inputs, etc.)

4. **Accessibility basics**

   * Semantic HTML
   * Keyboard navigation
   * ARIA attributes for key elements

3. **Error handling**

   * Retry fetching when an error occurs

---

## 🏗️ Architecture

Feature-based architecture:

* `features/dashboard` → candidate listing, filters, states
* `features/profile` → candidate profile and actions
* `data/` → mock data source
* `context/` → theme handling
* `layout/` → shared UI structure

---

## 📊 Data Handling

* Local mock data (`candidates.json`)
* Simulated API using async functions and artificial latency
* Random error simulation for testing error states
* Candidate status updates stored in `localStorage`

---

## 🔄 Tradeoffs & Improvements

* No backend API (mock data used instead)
* No automated tests (could add Vitest + Testing Library)
* Pagination could be added for scalability
* More advanced filtering (multi-select, ranges) could improve UX

---

## ⏰ Availability

Available for interviews:
Sunday – Thursday, 7 PM – 11 PM (GMT+3)

---

## 📎 Notes

* Designed to simulate a real recruitment product experience
* Focused on UI/UX clarity, performance, and clean architecture
