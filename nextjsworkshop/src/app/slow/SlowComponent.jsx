async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  await delay(5000);
  return (
    <div>
      <p className="text-green-400">
        I&apos;m very slow to load, but here I am at last
      </p>
      throw newError("I deliberately broke this page, because I am a bad
      person"); return <div>My page content</div>
    </div>
  );
}
