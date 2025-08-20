async function triggerPipeline() {
  const pipelineId = document.getElementById('pipelineId').value;
  document.getElementById('status').innerText = 'Triggering pipeline...';

  try {
    const response = await fetch('https://<your-function-app>.azurewebsites.net/api/TriggerPipeline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pipelineId })
    });

    const result = await response.json();
    document.getElementById('status').innerText = `Pipeline Triggered: ${result.status}`;
  } catch (error) {
    document.getElementById('status').innerText = 'Error triggering pipeline.';
    console.error(error);
  }
}
