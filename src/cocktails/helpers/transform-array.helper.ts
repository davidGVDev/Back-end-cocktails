export function TransformArrayDto(ClassType: any) {
  return ({ value }) => {
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          return parsed.map((item) => Object.assign(new ClassType(), item));
        }
        return [];
      } catch {
        return [];
      }
    }
    if (Array.isArray(value)) {
      return value.map((item) => Object.assign(new ClassType(), item));
    }
    return [];
  };
}
