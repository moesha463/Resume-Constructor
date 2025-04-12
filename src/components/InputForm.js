import React, { useState } from 'react';
import { Form, Input, Button, Upload, DatePicker, Select, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import moment from 'moment';

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
      workExperiences: (values.workExperiences || []).map((exp) => {
        const startDate = exp.startDate && moment.isMoment(exp.startDate) ? exp.startDate : null;
        const endDate = exp.endDate && moment.isMoment(exp.endDate) ? exp.endDate : null;
        return {
          ...exp,
          startDate: startDate ? startDate.format('MMMM YYYY') : '',
          endDate: endDate ? endDate.format('MMMM YYYY') : '',
          period: `${startDate ? startDate.format('MMMM YYYY') : 'N/A'} - ${endDate ? endDate.format('MMMM YYYY') : 'N/A'}`,
        };
      }),
      education: (values.education || []).map((edu) => {
        const gradDate = edu.graduationDate && moment.isMoment(edu.graduationDate) ? edu.graduationDate : null;
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
    onSubmit(resumeData);
  };

  const handleImageRemove = () => {
    setImageUrl(null);
    form.setFieldsValue({ image: [] });
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Enter name' }, { max: 50, message: 'Name is too long' }]}>
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item name="firstName" label="Surname" rules={[{ required: true, message: 'Enter surname' }, { max: 50, message: 'Surname is too long' }]}>
        <Input placeholder="Enter surname" />
      </Form.Item>

      <Form.Item name="position" label="Position" rules={[{ required: true, message: 'Enter position' }, { max: 100, message: 'Position is too long' }]}>
        <Input placeholder="Enter position" />
      </Form.Item>

      <Form.Item label="Photo" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload.Dragger
          accept="image/*"
          beforeUpload={() => false}
          onChange={handleImageUpload}
          onRemove={handleImageRemove}
          showUploadList={false}
          style={{ width: 150, height: 150, border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />
          ) : (
            <>
              <PlusOutlined style={{ fontSize: 40, color: '#aaa' }} />
              <p>Drag photo here</p>
            </>
          )}
        </Upload.Dragger>
      </Form.Item>

      <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Enter phone' }, { pattern: /^\+?\d{10,15}$/, message: 'Enter a valid phone number' }]}>
        <Input placeholder="Enter phone" />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Enter email' }, { type: 'email', message: 'Enter a valid email' }]}>
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item name="github" label="GitHub" rules={[{ type: 'url', message: 'Enter a valid GitHub URL', when: (value) => !!value }]}>
        <Input placeholder="GitHub URL" />
      </Form.Item>

      <Form.Item name="linkedin" label="LinkedIn" rules={[{ type: 'url', message: 'Enter a valid LinkedIn URL', when: (value) => !!value }]}>
        <Input placeholder="LinkedIn URL" />
      </Form.Item>

      <Form.List name="workExperiences">
        {(fields, { add, remove }) => (
          <>
            <p style={{ fontWeight: 'bold', marginBottom: 8 }}>Work Experience</p>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item {...restField} name={[name, 'title']} label="Company" rules={[{ required: true, message: 'Enter company name' }]}>
                  <Input placeholder="Company name" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'specialty']} label="Specialty" rules={[{ required: true, message: 'Enter specialty' }]}>
                  <Input placeholder="Specialty" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'startDate']} label="Start" rules={[{ required: true, message: 'Select start date' }]}>
                  <DatePicker picker="month" format="MMMM YYYY" placeholder="MMMM YYYY" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'endDate']} label="End" rules={[{ required: true, message: 'Select end date' }]}>
                  <DatePicker picker="month" format="MMMM YYYY" placeholder="MMMM YYYY" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'position']} label="Position" rules={[{ required: true, message: 'Enter position' }]}>
                  <Input placeholder="Position" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Work Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <p style={{ fontWeight: 'bold', marginBottom: 8 }}>Education</p>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item {...restField} name={[name, 'title']} label="Institution" rules={[{ required: true, message: 'Enter institution name' }]}>
                  <Input placeholder="Institution name" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'specialty']} label="Specialty" rules={[{ required: true, message: 'Enter specialty' }]}>
                  <Input placeholder="Specialty" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'graduationDate']} label="Graduation Date" rules={[{ required: true, message: 'Select graduation date' }]}>
                  <DatePicker picker="month" format="MMMM YYYY" placeholder="MMMM YYYY" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'degree']} label="Degree" rules={[{ required: true, message: 'Enter degree' }]}>
                  <Input placeholder="e.g., Bachelor" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.List name="languages">
        {(fields, { add, remove }) => (
          <>
            <p style={{ fontWeight: 'bold', marginBottom: 8 }}>Languages</p>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item {...restField} name={[name, 'name']} label="Language" rules={[{ required: true, message: 'Enter language' }]}>
                  <Input placeholder="Language" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'level']} label="Level" rules={[{ required: true, message: 'Enter level' }]}>
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
                  />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Language
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item name="skills" label="Skills" rules={[{ type: 'array', message: 'Enter at least one skill', required: true }]}>
        <Select mode="tags" style={{ width: '100%' }} placeholder="Enter skills and press Enter" tokenSeparators={[',']} />
      </Form.Item>

      <Form.Item name="tools" label="Tools" rules={[{ type: 'array', message: 'Enter at least one tool', required: true }]}>
        <Select mode="tags" style={{ width: '100%' }} placeholder="Enter tools and press Enter" tokenSeparators={[',']} />
      </Form.Item>

      <Form.Item name="aboutMe" label="About Me" rules={[{ max: 1000, message: 'Description must not exceed 1000 characters' }]}>
        <Input.TextArea rows={4} placeholder="Tell about yourself" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Generate PDF
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;