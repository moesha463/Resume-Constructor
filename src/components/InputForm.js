import React, { useState } from 'react';
import { Form, Input, Button, Upload, DatePicker, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';



const normFile = (e) => {
  if (Array.isArray(e)) return e;
  return e?.fileList || [];
};

const InputForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (info) => {
    const file = info.file;
    if (!file || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const onFinish = (values) => {
    console.log('Form Values:', values);
    console.log('Work Experiences:', values.workExperiences);

    const resumeData = {
      header: {
        name: values.name,
        firstName: values.firstName,
        position: values.position,
        imageUrl: imageUrl || null,
      },
      contacts: [
        { type: 'phone', value: values.phone },
        { type: 'email', value: values.email },
      ],
      socialMedia: [
        values.github ? { name: 'GitHub', url: values.github } : null,
        values.linkedin ? { name: 'LinkedIn', url: values.linkedin } : null,
      ].filter(Boolean),
      workExperiences: (values.workExperiences || []).map((exp, index) => {
        const startDate = exp.startDate && typeof exp.startDate.format === 'function' ? exp.startDate : null;
        const endDate = exp.endDate && typeof exp.endDate.format === 'function' ? exp.endDate : null;

        console.log(`Work Experience ${index}:`, { startDate, endDate });

        if (!startDate) {
          console.warn(`Work Experience ${index} has invalid startDate:`, exp.startDate);
        }
        if (!endDate) {
          console.warn(`Work Experience ${index} has no endDate (ongoing job?)`);
        }

        return {
          ...exp,
          startDate: startDate ? startDate.format('MMMM YYYY') : '',
          endDate: endDate ? endDate.format('MMMM YYYY') : 'Present',
          period: `${startDate ? startDate.format('MMMM YYYY') : 'Unknown'} - ${endDate ? endDate.format('MMMM YYYY') : 'Present'}`,
        };
      }),
      education: (values.education || []).map((edu) => {
        const gradDate = edu.graduationDate && typeof edu.graduationDate.format === 'function' ? edu.graduationDate : null;
        return {
          ...edu,
          graduationDate: gradDate ? gradDate.format('MMMM YYYY') : '',
        };
      }),
      languages: (values.languages || []).map((lang) => ({
        name: lang.name,
        level: lang.level,
      })),
      skills: values.skills || [],
      tools: values.tools || [],
      aboutMe: values.aboutMe || '',
    };
    console.log('Resume Data:', resumeData);
    onSubmit(resumeData);
  };

  const handleImageRemove = () => {
    setImageUrl(null);
    form.setFieldsValue({ image: [] });
  };

  return (
    <div className="form-container">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        className="resume-form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ max: 50, message: 'Name is too long' }]}
          className="form-item"
        >
          <Input placeholder="Enter name" className="form-input" />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="Surname"
          rules={[{ max: 50, message: 'Surname is too long' }]}
          className="form-item"
        >
          <Input placeholder="Enter surname" className="form-input" />
        </Form.Item>

        <Form.Item
          name="position"
          label="Position"
          rules={[{ max: 100, message: 'Position is too long' }]}
          className="form-item"
        >
          <Input placeholder="Enter position" className="form-input" />
        </Form.Item>

        <Form.Item
          label="Photo"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="form-item"
        >
          <Upload.Dragger
            accept="image/*"
            beforeUpload={() => false}
            onChange={handleImageUpload}
            onRemove={handleImageRemove}
            showUploadList={false}
            className="upload-dragger"
          >
            {imageUrl ? (
              <img src={imageUrl} alt="preview" className="upload-image" />
            ) : (
              <div className="upload-placeholder">
                <PlusOutlined className="upload-icon" />
                <p className="upload-text">Drag photo here</p>
              </div>
            )}
          </Upload.Dragger>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ pattern: /^\+?\d{10,15}$/, message: 'Enter a valid phone number' }]}
          className="form-item"
        >
          <Input placeholder="Enter phone" className="form-input" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: 'email', message: 'Enter a valid email' }]}
          className="form-item"
        >
          <Input placeholder="Enter email" className="form-input" />
        </Form.Item>

        <Form.Item
          name="github"
          label="GitHub"
          rules={[{ type: 'url', message: 'Enter a valid GitHub URL', when: (value) => !!value }]}
          className="form-item"
        >
          <Input placeholder="GitHub URL" className="form-input" />
        </Form.Item>

        <Form.Item
          name="linkedin"
          label="LinkedIn"
          rules={[{ type: 'url', message: 'Enter a valid LinkedIn URL', when: (value) => !!value }]}
          className="form-item"
        >
          <Input placeholder="LinkedIn URL" className="form-input" />
        </Form.Item>

        <Form.List name="workExperiences">
          {(fields, { add, remove }) => (
            <div className="form-section">
              <p className="section-title">Work Experience</p>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="form-group" align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'title']}
                    label="Company"
                    rules={[{ required: true, message: 'Enter company name' }]}
                    className="form-item"
                  >
                    <Input placeholder="Company name" className="form-input" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'specialty']}
                    label="Specialty"
                    rules={[{ required: true, message: 'Enter specialty' }]}
                    className="form-item"
                  >
                    <Input placeholder="Specialty" className="form-input" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'startDate']}
                    label="Start"
                    rules={[{ required: true, message: 'Select start date' }]}
                    className="form-item"
                  >
                    <DatePicker
                      picker="month"
                      format="MMMM YYYY"
                      placeholder="MMMM YYYY"
                      className="form-date-picker"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'endDate']}
                    label="End"
                    className="form-item"
                  >
                    <DatePicker
                      picker="month"
                      format="MMMM YYYY"
                      placeholder="MMMM YYYY or leave blank for ongoing"
                      className="form-date-picker"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'position']}
                    label="Position"
                    rules={[{ required: true, message: 'Enter position' }]}
                    className="form-item"
                  >
                    <Input placeholder="Position" className="form-input" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    className="remove-icon"
                  />
                </Space>
              ))}
              <Form.Item className="form-item">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  className="add-button"
                >
                  Add Work Experience
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>

        <Form.List name="education">
          {(fields, { add, remove }) => (
            <div className="form-section">
              <p className="section-title">Education</p>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="form-group" align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'title']}
                    label="Institution"
                    rules={[{ required: true, message: 'Enter institution name' }]}
                    className="form-item"
                  >
                    <Input placeholder="Institution name" className="form-input" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'specialty']}
                    label="Specialty"
                    rules={[{ required: true, message: 'Enter specialty' }]}
                    className="form-item"
                  >
                    <Input placeholder="Specialty" className="form-input" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'graduationDate']}
                    label="Graduation Date"
                    rules={[{ required: true, message: 'Select graduation date' }]}
                    className="form-item"
                  >
                    <DatePicker
                      picker="month"
                      format="MMMM YYYY"
                      placeholder="MMMM YYYY"
                      className="form-date-picker"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'degree']}
                    label="Degree"
                    rules={[{ required: true, message: 'Enter degree' }]}
                    className="form-item"
                  >
                    <Input placeholder="e.g., Bachelor" className="form-input" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    className="remove-icon"
                  />
                </Space>
              ))}
              <Form.Item className="form-item">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  className="add-button"
                >
                  Add Education
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>

        <Form.List name="languages">
          {(fields, { add, remove }) => (
            <div className="form-section">
              <p className="section-title">Languages</p>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="form-group" align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    label="Language"
                    rules={[{ required: true, message: 'Enter language' }]}
                    className="form-item"
                  >
                    <Input placeholder="Language" className="form-input" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'level']}
                    label="Level"
                    rules={[{ required: true, message: 'Enter level' }]}
                    className="form-item"
                  >
                    <Select
                      placeholder="Select level"
                      options={[
                        { value: 'A1', label: 'A1' },
                        { value: 'A2', label: 'A2' },
                        { value: 'B1', label: 'B1' },
                        { value: 'B2', label: 'B2' },
                        { value: 'C1', label: 'C1' },
                        { value: 'C2', label: 'C2' },
                      ]}
                      className="form-select"
                    />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    className="remove-icon"
                  />
                </Space>
              ))}
              <Form.Item className="form-item">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  className="add-button"
                >
                  Add Language
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>

        <Form.Item name="skills" label="Skills" className="form-item">
          <Select
            mode="tags"
            placeholder="Enter skills and press Enter"
            tokenSeparators={[',']}
            dropdownStyle={{ display: 'none' }}
            className="form-select"
          />
        </Form.Item>

        <Form.Item name="tools" label="Tools" className="form-item">
          <Select
            mode="tags"
            placeholder="Enter tools and press Enter"
            tokenSeparators={[',']}
            dropdownStyle={{ display: 'none' }}
            className="form-select"
          />
        </Form.Item>

        <Form.Item
          name="aboutMe"
          label="About Me"
          rules={[{ max: 1000, message: 'Description must not exceed 1000 characters' }]}
          className="form-item"
        >
          <Input.TextArea
            rows={4}
            placeholder="Tell about yourself"
            className="form-textarea"
          />
        </Form.Item>

        <Form.Item className="form-item">
          <Button
            type="primary"
            htmlType="submit"
            className="submit-button"
          >
            Generate PDF
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputForm;