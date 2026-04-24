"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const STORAGE_KEY = "goapsny_onboarding_seen";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  align-items: flex-end;
`;

const Sheet = styled.div`
  background: var(--color-panel);
  border-radius: 20px 20px 0 0;
  padding: 24px 20px 36px;
  width: 100%;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.35s ease-out;
`;

const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--gray-6);
  margin: 0 auto 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--gray-12);
`;

const Description = styled.p`
  font-size: 15px;
  color: var(--gray-11);
  margin: 0 0 24px;
  line-height: 1.5;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`;

const Icon = styled.div`
  font-size: 22px;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
`;

const RowText = styled.div`
  font-size: 15px;
  color: var(--gray-12);
  line-height: 1.4;
`;

export default function OnboardingSheet() {
  const { status } = useSession();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        setVisible(true);
      }
    }
  }, [status]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleSignIn = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    signIn("osm");
  };

  if (!visible) return null;

  return (
    <Overlay onClick={dismiss}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Handle />
        <Title>Добро пожаловать в GoApsny</Title>
        <Description>
          Первая карта доступности Абхазии. Создаётся жителями для жителей.
        </Description>

        <Row>
          <Icon>🗺️</Icon>
          <RowText>
            <strong>Хочешь просто смотреть</strong> — ничего не нажимай, карта
            уже открыта.
          </RowText>
        </Row>
        <Row>
          <Icon>✏️</Icon>
          <RowText>
            <strong>Хочешь добавлять и оценивать места</strong> — нажми «Войти».
            Это бесплатно и займёт минуту.
          </RowText>
        </Row>

        <Flex gap="3" direction="column" style={{ marginTop: 8 }}>
          <Button size="3" onClick={handleSignIn} style={{ width: "100%" }}>
            Войти через OpenStreetMap
          </Button>
          <Button
            size="3"
            variant="soft"
            color="gray"
            onClick={dismiss}
            style={{ width: "100%" }}
          >
            Смотреть карту
          </Button>
        </Flex>
      </Sheet>
    </Overlay>
  );
}
