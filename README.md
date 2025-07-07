# LearningDesignPatterns

This project hosts a collection of reusable instructional design patterns. The documentation site is built with [Astro](https://astro.build/) using the Starlight theme.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Repository Structure

```
src/
  content/docs/
    design-patterns/
    problem-patterns/
    practice-patterns/
    case-patterns/
    inquiry-patterns/
  assets/
public/
  assets/
```

## Add a New Pattern

1. Copy `src/content/docs/pattern-template.md`.
2. Update the frontmatter `title` and `description`.
3. Complete each section in the template.
4. Save the file in the matching category directory.
5. Commit your changes and open a pull request.
