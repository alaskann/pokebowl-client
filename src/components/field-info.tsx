import { FieldMeta } from "@tanstack/react-form";

export default function FieldInfo({
  fieldMeta,
}: {
  fieldMeta: FieldMeta | undefined;
}) {
  if (!fieldMeta) return null;
  return (
    <>
      {fieldMeta.isTouched && fieldMeta.errors.length ? (
        <p className="text-red-500 px-std-sm">{fieldMeta.errors.join(",")}</p>
      ) : null}
    </>
  );
}
