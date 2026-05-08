/*
  # Create Contact Submissions Table

  ## Summary
  Creates a table to store contact form submissions from the MALICEVISUALS portfolio site.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier
    - `name` (text) - Submitter's full name
    - `email` (text) - Submitter's email address
    - `band_name` (text) - Name of the band/project
    - `message` (text) - The project message/vision
    - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on `contact_submissions`
  - Insert policy: anyone (anon) can submit the form
  - Select policy: only authenticated users (admin) can read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  band_name text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
