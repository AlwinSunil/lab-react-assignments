**Question:** Which out of the two components (which are performing the same functionality) is performing better and how?

**Answer:** Here, Pure Counter component will be performing better since it implements a shallow comparison in _shouldComponentUpdate_ to prevent unnecessary renders when props or state haven't changed, thus improving performance.
