import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button/Button'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Olá mundo</p>
    <Button />
    <Button variant="outline"/>
    <Button variant="text"/>
    <Button disableShadow />
    <Button disabled />
    <Button variant="text" disabled />
    <Button startIcon="local_grocery_store" />
    <Button endIcon="local_grocery_store" />
    <Button size="sm" />
    <Button size="md" />
    <Button size="lg" />
    <Button color="default" />
    <Button color="primary" />
    <Button color="secondary" />
    <Button color="danger" />
  </React.StrictMode>
);
